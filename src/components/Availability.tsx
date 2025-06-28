// components/Availability.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type Slot = { start: string; end: string }
type Schedule = Record<string, Slot[] | 'Free'>

const schedule: Schedule = {
  Monday: [{ start: '9:00 AM', end: '11:30 AM' }, { start: '1:30 PM', end: '4:30 PM' }],
  Tuesday: [{ start: '1:30 PM', end: '10:30 PM' }],
  Wednesday: [{ start: '9:00 AM', end: '12:30 PM' }],
  Thursday: [{ start: '10:30 AM', end: '1:30 PM' }],
  Friday: [{ start: '1:30 PM', end: '7:30 PM' }],
  Saturday: [{ start: '8:30 AM', end: '1:30 PM' }],
  Sunday: 'Free',
}

function generateTimeSlots(): string[] {
  const slots: string[] = []
  let hour = 6, minute = 0, ampm: 'AM' | 'PM' = 'AM'
  while (!(hour === 10 && minute === 30 && ampm === 'PM')) {
    slots.push(`${hour}:${minute === 0 ? '00' : '30'} ${ampm}`)
    if (minute === 0) minute = 30
    else {
      minute = 0
      hour++
      if (hour === 12) ampm = ampm === 'AM' ? 'PM' : 'AM'
      if (hour > 12) hour = 1
    }
  }
  slots.push('10:30 PM')
  return slots
}

const timeSlots = generateTimeSlots()

function isBusy(day: string, time: string): boolean {
  const entry = schedule[day]
  if (entry === 'Free') return false
  return entry.some(({ start, end }) => {
    const s = new Date(`2000-01-01 ${start}`)
    const e = new Date(`2000-01-01 ${end}`)
    const t = new Date(`2000-01-01 ${time}`)
    return t >= s && t < e
  })
}

export default function Availability() {
  const [view, setView] = useState<'list' | 'calendar'>('list')

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center">
      <div className="flex gap-4 mb-6">
        <button className="bg-green-500 px-4 py-2 rounded hover:scale-105 transition" onClick={() => setView('list')}>
          List View
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded hover:scale-105 transition" onClick={() => setView('calendar')}>
          Calendar View
        </button>
      </div>
      {view === 'list' ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {Object.entries(schedule).map(([day, times], i) => (
            <motion.div
              key={day}
              className="bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-3 flex items-center">
                {times === 'Free' ? '🟢' : '🔴'} {day}
              </h2>
              {times === 'Free' ? (
                <p className="italic text-gray-300">Free</p>
              ) : (
                <ul className="space-y-2">
                  {times.map((slot, j) => (
                    <li key={j} className="flex items-center">
                      <span className="bg-red-500 px-2 py-1 rounded text-sm mr-2">
                        ⏰ {slot.start} - {slot.end}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div className="overflow-x-auto w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="border p-2">Time</th>
                {Object.keys(schedule).map((d) => (
                  <th key={d} className="border p-2">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((t, i) => (
                <motion.tr key={t} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.02 }}>
                  <td className="border p-2 bg-gray-800">{t}</td>
                  {Object.keys(schedule).map((d) => (
                    <td
                      key={d + t}
                      className={`border p-2 ${isBusy(d, t) ? 'bg-red-500' : 'bg-green-500'} hover:scale-105 transition`}
                    />
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  )
}
