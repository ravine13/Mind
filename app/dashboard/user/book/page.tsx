"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Clock, User } from "lucide-react";

export default function BookSessionPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const availableTimes = [
    { label: "9:00 AM", value: "09:00:00" },
    { label: "10:00 AM", value: "10:00:00" },
    { label: "11:00 AM", value: "11:00:00" },
    { label: "1:00 PM", value: "13:00:00" },
    { label: "2:00 PM", value: "14:00:00" },
    { label: "3:00 PM", value: "15:00:00" },
    { label: "4:00 PM", value: "16:00:00" },
  ];

  const sessionTypes = [
    "Initial Consultation",
    "Therapy Session",
    "Follow-up Session",
    "Crisis Support",
    "Group Therapy",
  ];

  const handleBooking = async () => {
    if (!date || !selectedTime || !sessionType) {
      alert("⚠ Please fill in all required fields");
      return;
    }

    const bookingData = {
      appointment_date: date.toISOString().split("T")[0],
      appointment_time: selectedTime,
      session_type: sessionType,
      notes: notes || "",
    };

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to book a session.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://mind-matters-mn7b.onrender.com/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(bookingData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Failed to create appointment");
      }

      alert(`✅ Session booked for ${data.appointment_date} at ${data.appointment_time}`);

      setSelectedTime("");
      setSessionType("");
      setNotes("");

    } catch (error: any) {
      alert(`❌ Booking failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <h2 className="text-3xl font-bold tracking-tight">Book a Session</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Select Date & Time
              </CardTitle>
              <CardDescription>Choose your preferred date and time for the session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Select Date</Label>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                    className="rounded-md border"
                />
              </div>

              <div>
                <Label>Available Times</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {availableTimes.map((time) => (
                      <Button
                          key={time.value}
                          variant={selectedTime === time.value ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time.value)}
                          className={selectedTime === time.value ? "bg-blue-600 hover:bg-blue-700" : ""}
                      >
                        <Clock className="mr-1 h-3 w-3" />
                        {time.label}
                      </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Session Details
              </CardTitle>
              <CardDescription>Provide additional information about your session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="sessionType">Session Type</Label>
                <Select value={sessionType} onValueChange={setSessionType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select session type" />
                  </SelectTrigger>
                  <SelectContent>
                    {sessionTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                    id="notes"
                    placeholder="Any specific topics you'd like to discuss or concerns you have..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Session Summary</h4>
                <div className="space-y-1 text-sm text-blue-800">
                  <p>
                    <strong>Date:</strong> {date ? date.toDateString() : "Not selected"}
                  </p>
                  <p>
                    <strong>Time:</strong>{" "}
                    {selectedTime
                        ? availableTimes.find((t) => t.value === selectedTime)?.label
                        : "Not selected"}
                  </p>
                  <p>
                    <strong>Type:</strong> {sessionType || "Not selected"}
                  </p>
                  <p>
                    <strong>Duration:</strong> 50 minutes
                  </p>
                  <p>
                    <strong>Provider:</strong> Dr. Sarah Johnson
                  </p>
                </div>
              </div>

              <Button
                  onClick={handleBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!date || !selectedTime || !sessionType || loading}
              >
                {loading ? "Booking..." : "Book Session"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
