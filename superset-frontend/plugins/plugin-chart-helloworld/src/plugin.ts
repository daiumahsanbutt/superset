import { ChartPlugin } from '@superset-ui/core';
import HelloWorldChart from './HelloWorldChart';

export default class HelloWorldChartPlugin extends ChartPlugin {
  constructor() {
    super({
      loadChart: () => HelloWorldChart,
      metadata: {
        name: 'Hello World Chart',
        description: 'A simple Hello World chart plugin',
        thumbnail: '',
      },
      transformProps: (chartProps) => chartProps,
    });
  }
}
