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
| Twrnc               | 364     | 0          |
| Native StyleSheet   | 368     | 1%         |
| Styled Component v6 | 413     | 14%        |
| Restyle (shopify)   | 420     | 16%        |
| Emotion             | 440     | 21%        |
| GlueStack           | 493     | 36%        |
| NativeWind          | 510     | 40%        |


![img.png](./docs/output.png)
