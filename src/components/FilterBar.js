import React, {useState} from 'react'
import Datepicker from "tailwind-datepicker-react"

const options = {
	title: "Twubric!",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 dark:bg-gray-800 max-w-sm",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-red-500",
		input: "",
		inputIcon: "",
		selected: "",
        
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date(null),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

const FilterBar = ({startdate, enddate}) => {
    const [showStart, setShowStart] = useState (false)
    const [showEnd, setShowEnd] = useState (false)

	const handleChangeStart = (selectedDate) => {
		const dateobj = new Date(selectedDate);
   		const unixTimestamp = Math.floor(dateobj.getTime() / 1000);
        startdate(unixTimestamp)
	}

	const handleCloseStart = (state) => {
		setShowStart(state)
	}

    const handleChangeEnd = (selectedDate) => {
		const dateobj = new Date(selectedDate);
   		const unixTimestamp = Math.floor(dateobj.getTime() / 1000);
		enddate(unixTimestamp)
	}

	const handleCloseEnd = (state) => {
		setShowEnd(state)
	}

  return (
    <div className=' m-10 flex justify-center gap-32'>
        <Datepicker classNames=' max-w-52' options={options} onChange={handleChangeStart} show={showStart} setShow={handleCloseStart} />
        <Datepicker classNames=' max-w-52 ' options={options} onChange={handleChangeEnd} show={showEnd} setShow={handleCloseEnd} />
    </div>
  )
}

export default FilterBar;