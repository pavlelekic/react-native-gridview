# React Native GridView Component

Here is how it looks:

![alt text](https://s24.postimg.org/ir4zxi25x/Simulator_Screen_Shot_Feb_7_2017_15_09_37.png "iPhone 5s")

## Instalation

Via NPM

`npm install react-native-easy-gridview --save`

## Why do you need this?

If you try to make a grid view in React Native the way it is described in the docs you will encounter several problems.
You need to specify exact with of your items in the list. Which means you need to measure the available width for the whole grid, and divide that number by the number of columns you wish to have. There is no way to use percentages or flexbox to define the width of items, you have to do these calculations manually.

When you divide the available width with the number of columns, you will get a number that is most likely not a whole number, which means that antialiasing will kick in when rendering borders of your items. You might not care about this problem, but if you have 1px borders of your items they will not look nice and crisp.

This is why I created this component. It will do these calculations for you. It uses ListView component underneath, and therefore accepts all the props that the original RN ListView component receives, plus one extra prop to set the number of columns (`numberOfItemsPerRow`)

## Example

To run the example just do `npm install` in the `/Example` dir and then run `react-native run-ios`, or open it in Xcode and run it from there.

## Props

`numberOfItemsPerRow` - Like the name implies, it's the number of items per row (number of columns).

[ListView props...]

**Tip:** set `pageSize` to be the same as `numberOfItemsPerRow` to avoid rendering issues with ListView.
