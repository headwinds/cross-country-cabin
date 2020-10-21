# cross-country-cabin-craft

Let's create tile-based based worlds in the browser and native devices using react-native-web.

How does this library work and how can I do something similar?

I'm using the react-scripts to create a react app to develop and play with the components in the browser. 

```
yarn
yarn start
```

Once I'm happy with them, I run `yarn build` which compiles the code to the `dist` folder. You'll noticed in the `package.json` that the `main` points to `dist/library.js` which is the compiled component library that we eventually import into our projects. 

```
npm build
npm publish
```

Within this project, there is also the examples folder. By unlike other npm packages, I'm not really using it that often and I would almost recommend to ignore it. 

Instead, after I pubish the project, I like to fire up a [test snack](https://snack.expo.io/@headwinds/two-miles-squared) and update the `cross-country-cabin-craft` dependency to the most recent. Then I can test the library in the browser or directly on my phone. 

## Examples folder

You can use the example to verify that the publish to npm was successful but I as mentioned it might as well skip straight to a [snack](https://snack.expo.io/@headwinds/two-miles-squared).

## Help & Thanks

* [react-native-web storybook](https://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page)
* [how-to-create-a-barebones-production-ready-npm-package-with-babel-7](https://www.cybergrx.com/resources/research-and-insights/blog/how-to-create-a-barebones-production-ready-npm-package-with-babel-7)

## License

MIT © [headwinds](https://github.com/headwinds)
