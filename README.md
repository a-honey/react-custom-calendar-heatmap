# React Custom Calendar Heatmap
## Goal
Currently, react-calendar-heatmap doesn't allow changing svg elements. Plus, it would be nice to have some action when hovering.

## Requirements
- Generate elements for the previous year based on today's date if there is no props about date.
- Create a gradient based on 5 divisions of the received date => If it is above 0, it should be given at least the first level.
- If levels are given, divide by that number to create the gradient.
- If a period is given, create a year fitting that period.
- If a received svg exists, create elements with it; otherwise, render default elements.
- When svg is hovered, display the value => need id or use index => it should be changed value, date, etc.

## Props
- level?: number
- endDate: Date
- startDate?: Date

## Plan
- Use Compound Component Pattern to easily select date, title, ect.
- Would like it not to be restricted to a specific environment
