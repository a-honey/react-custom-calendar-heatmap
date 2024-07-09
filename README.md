# React Custom Calendar Heatmap

A heatmap library designed for customizable SVG elements, offering flexible configuration options and interactive hover actions to enhance data visualization. It is currently under development and expected to include features for seamless integration and extensive customization.🚀

[![npm version](https://badge.fury.io/js/react-custom-calendar-heatmap.svg)](https://badge.fury.io/js/react-custom-calendar-heatmap)
[![Build Status](https://travis-ci.org/kevinsqi/react-custom-calendar-heatmap.svg?branch=master)](https://travis-ci.org/kevinsqi/react-custom-calendar-heatmap)
[![bundle size](https://img.shields.io/bundlephobia/min/react-custom-calendar-heatmap.svg)](https://bundlephobia.com/result?p=react-custom-calendar-heatmap)

![image](https://github.com/a-honey/react-custom-calendar-heatmap/assets/75254185/0810efa4-a88b-4c90-bd4f-96c1ce68a7f8)


## Setup

Install the npm module with npm, yarn or pnpm:

```bash
pnpm install react-custom-calendar-heatmap
```

## Usage

Import the component:

```javascript
import CalendarHeatmap from 'react-custom-calendar-heatmap';
```

Import styles. You can directly import from the module, which requires a CSS loader:

```javascript
import 'react-custom-calendar-heatmap/dist/styles.css';
```

A CSS loader is included by default in create-react-app. If you don't have a CSS loader, you can simply [copy the stylesheet](src/styles/globals.css) into a file in your project and import it instead.

Create a component with SVG:

```javascript
import React from "react";

const DefaultElement = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100%" height="100%" fill="current" />
    </svg>
  );
};

export default DefaultElement;
```

When setting the SVG's fill attribute, using "current" is crucial for conveying the color to its child elements. This approach ensures that the child elements inside the SVG inherit the color seamlessly from their parent element. Additionally, remember to pass props to the component as needed.

To show a basic heatmap:

```javascript
<CalendarHeatmap
  values={[
    { date: '2024-07-09', value: 12 },
    { date: '2024-07-10', value: 54 },
    { date: '2024-07-11', value: 38 },
    // ...and so on
  ]}
/>
```

## Props

| Name | IsRequired | Type | Description |
| ---- | ---- | ---- | ----------- |
| values | true | {date: Date, value: number} | |
| SvgComponent | false | JSX.Element | |

## License

react-custom-calendar-heatmap is Copyright &copy; 2024 Ahyeon, Jung([@a-honey](https://github.com/a-honey)) and is released under an MIT License.
