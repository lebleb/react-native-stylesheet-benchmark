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
| Native StyleSheet   | 369     | 0          |
| Styled Component v6 | 428     | 16%        |
| Restyle (shopify)   | 434     | 18%        |
| Emotion             | 464     | 26%        |
| NativeWind          | 528     | 43%        |


![img.png](./docs/output.png)
