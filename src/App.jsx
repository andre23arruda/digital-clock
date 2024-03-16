import React, { useEffect, useState } from 'react'
import NoSleep from 'nosleep.js'

import './App.css'


const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']


function getCurrentTime() {
	const fullDate = new Date()
	return {
		month: fullDate.getMonth(),
		date: fullDate.getDate(),
		year: fullDate.getFullYear(),
		day: fullDate.getDay(),
		hours: fullDate.getHours(),
		minutes: fullDate.getMinutes(),
		seconds: fullDate.getSeconds(),
	}
}


export default function App() {
	const [currentTime, setCurrentTime] = useState(getCurrentTime())

	useEffect(() => {
		const noSleep = new NoSleep()
		noSleep.enable()

		setInterval(() => {
			setCurrentTime(getCurrentTime())
		}, 1000)
	}, [])

	return (
		<main className="clock-display">
			<div className="date-field">
				<div className="day-of-week">
					<p className="day-alpha">{ days[currentTime.day] }</p>
					<p className="placeholder">mmm</p>
					<p className="placeholder">ooo</p>
					<p className="placeholder">nnn</p>
					<p className="placeholder">ttt</p>
					<p className="placeholder">uuu</p>
					<p className="placeholder">eee</p>
					<p className="placeholder">sss</p>
					<p className="placeholder">www</p>
					<p className="placeholder">hhh</p>
					<p className="placeholder">rrr</p>
					<p className="placeholder">fff</p>
					<p className="placeholder">iii</p>
				</div>

				<div className="date">
					<p className="date-number">{ currentTime.date.toString().padStart(2, '0')}</p>
					<p className="placeholder">88</p>
				</div>

				<div className="month">
					<p className="month-alpha">{ months[currentTime.month] }</p>
					<p className="placeholder">mmm</p>
					<p className="placeholder">ooo</p>
					<p className="placeholder">nnn</p>
					<p className="placeholder">ttt</p>
					<p className="placeholder">uuu</p>
					<p className="placeholder">eee</p>
					<p className="placeholder">sss</p>
					<p className="placeholder">www</p>
					<p className="placeholder">hhh</p>
					<p className="placeholder">rrr</p>
					<p className="placeholder">fff</p>
					<p className="placeholder">iii</p>
					<p className="placeholder">ddd</p>
					<p className="placeholder">aaa</p>
					<p className="placeholder">yyy</p>
				</div>

				<div className="year">
					<p className="year-number">{ currentTime.year }</p>
					<p className="placeholder">8888</p>
				</div>
			</div>

			<div className="clock-field">
				<div className="numbers">
					<p className="hours">{ currentTime.hours.toString().padStart(2, '0') }</p>
					<p className="placeholder">88</p>
				</div>

				<div className="colon">
					<p>:</p>
				</div>

				<div className="numbers">
					<p className="minutes">{ currentTime.minutes.toString().padStart(2, '0') }</p>
					<p className="placeholder">88</p>
				</div>

				<div className="colon">
					<p>:</p>
				</div>

				<div className="numbers">
					<p className="seconds">{ currentTime.seconds.toString().padStart(2, '0') }</p>
					<p className="placeholder">88</p>
				</div>
			</div>
		</main>
	)
}
