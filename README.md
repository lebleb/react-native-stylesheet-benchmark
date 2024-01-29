## React Native CSS/StyleSheet Frameworks Benchmark

### Requirements
- Node v20.11.0
- Yarn
- Xcode

### Start

```shell
yarn install
```

```shell
yarn ios
```

### Output


| Test                | Average | % Slowdown |
|---------------------|---------|------------|
| Twrnc               | 401     | 0          |
| Native StyleSheet   | 407     | 1%         |
| Styled Component v6 | 448     | 12%        |
| Unistyle            | 452     | 13%        |
| Restyle (shopify)   | 454     | 13%        |
| Emotion             | 468     | 17%        |
| GlueStack           | 516     | 29%        |
| NativeWind          | 543     | 35%        |


![img.png](./docs/output.png)
