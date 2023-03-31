import React from 'react'
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend,
    Category, StackingColumnSeries, Tooltip
} from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
export default class Stacked extends React.PureComponent {
    render() {
        const { width, height } = this.props;
        return (
            <ChartComponent
                width={width}
                height={height}
                id='charts'//这里必须是charts
                primaryXAxis={stackedPrimaryXAxis}
                primaryYAxis={stackedPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                legendSettings={{ background: 'white' }}
            >
                <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
                <SeriesCollectionDirective>
                    {stackedCustomSeries.map((item, index) =>
                        <SeriesDirective key={index} {...item} />
                    )}
                </SeriesCollectionDirective>
            </ChartComponent>
        )
    }
}
