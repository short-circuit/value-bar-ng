# value-bar-ng

## About
Angular component to visualize a bar with specific value between 0-100.
Mostly used for progressbars, but also for making quick horizontal bar charts.

## Usage
The component currently has 6 optional Inputs:
- `value` defines what value the bar has to show | `number`
- `rtl` inverts the direction of the bar | `boolean`
- `color` is a hex defined color string | `string` e.g. `#1c1c1c`
- `height` defines the bar height in pixel | `number`
- `style` selects a style from 4 predefined (look at scss for more information) | `number`
- `delay` delays the animation by given ms | `number`

Use `<value-chart-bar></value-chart-bar>` to insert a bar into the template.


<sub>Some parts of the CSS code were found online. I can't seem to remember from where. If anyone finds it, please let me know so that I can add the source and give credit for it</sub>
