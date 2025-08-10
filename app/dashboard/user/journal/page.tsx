"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Plus, Search, Calendar, Heart } from "lucide-react"

export default function JournalPage() {
  const [showNewEntry, setShowNewEntry] = useState(false)
  const [newEntry, setNewEntry] = useState({ title: "", content: "", mood: "" })

  const journalEntries = [
    {
      id: 1,
      title: "Feeling more confident",
      content:
        "Today I practiced the breathing exercises we discussed in our last session. I noticed that when I started feeling anxious about the presentation, I was able to use the 4-7-8 technique and it really helped calm my nerves. I'm starting to see progress in managing my anxiety.",
      date: "Jan 14, 2024",
      mood: "Good",
      moodColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      title: "Challenging day at work",
      content:
        "Work was particularly stressful today with multiple deadlines. However, I used the coping strategies we've been working on. Instead of catastrophizing, I broke down the tasks into smaller, manageable pieces. I also took short breaks to practice mindfulness.",
      date: "Jan 12, 2024",
      mood: "Okay",
      moodColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      title: "Weekend reflection",
      content:
        "Spent quality time with family this weekend. I felt more present and connected than I have in weeks. The mindfulness exercises are really helping me stay in the moment rather than worrying about work or future events.",
      date: "Jan 10, 2024",
      mood: "Great",
      moodColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 4,
      title: "Difficult conversation",
      content:
        "Had to have a difficult conversation with my partner about boundaries. It was uncomfortable, but I used the communication techniques we practiced. I stayed calm and expressed my needs clearly without being defensive.",
      date: "Jan 8, 2024",
      mood: "Mixed",
      moodColor: "bg-purple-100 text-purple-800",
    },
  ]

  const handleSaveEntry = () => {
    if (!newEntry.title || !newEntry.content) {
      alert("Please fill in both title and content")
      return
    }

    alert("Journal entry saved successfully!")
    setNewEntry({ title: "", content: "", mood: "" })
    setShowNewEntry(false)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <h2 className="text-3xl font-bold tracking-tight">Journal</h2>
        </div>
        <Button onClick={() => setShowNewEntry(!showNewEntry)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          New Entry
        </Button>
      </div>

      {showNewEntry && (
        <Card>
          <CardHeader>
            <CardTitle>New Journal Entry</CardTitle>
            <CardDescription>Write about your thoughts, feelings, and experiences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Give your entry a title..."
                value={newEntry.title}
                onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="mood">How are you feeling?</Label>
              <div className="flex gap-2 mt-2">
                {["Great", "Good", "Okay", "Difficult", "Mixed"].map((mood) => (
                  <Button
                    key={mood}
                    variant={newEntry.mood === mood ? "default" : "outline"}
                    size="sm"
                    onClick={() => setNewEntry({ ...newEntry, mood })}
                    className={newEntry.mood === mood ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    <Heart className="mr-1 h-3 w-3" />
                    {mood}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="content">Your thoughts</Label>
              <Textarea
                id="content"
                placeholder="What's on your mind today? How are you feeling? What happened that you'd like to remember or reflect on?"
                value={newEntry.content}
                onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                rows={6}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSaveEntry} className="bg-blue-600 hover:bg-blue-700">
                Save Entry
              </Button>
              <Button variant="outline" onClick={() => setShowNewEntry(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search entries..." className="pl-8" />
        </div>
        <Button variant="outline">Filter by Mood</Button>
      </div>

      <div className="grid gap-4">
        {journalEntries.map((entry) => (
          <Card key={entry.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">{entry.title}</CardTitle>
                  <Badge className={entry.moodColor}>{entry.mood}</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {entry.date}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{entry.content}</p>
              <div className="flex justify-end mt-4 space-x-2">
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
                <Button variant="ghost" size="sm">
                  Share with Dr. Johnson
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Journal Insights</CardTitle>
          <CardDescription>Patterns and trends from your recent entries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <p className="text-sm text-muted-foreground">Total Entries</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">7.2</div>
              <p className="text-sm text-muted-foreground">Average Mood Score</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <p className="text-sm text-muted-foreground">Entries This Week</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
