
import ChartBar from './ChartBar';
import './Chart.css';


const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const totalMax = Math.max(...dataPointValues); //... spread operator to transform array to list 

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
            <ChartBar 
                key={dataPoint.label} // a unique id to help react render things efficiently
                value={dataPoint.value}
                maxValue={totalMax}
                label={dataPoint.label}

            />
            ))}
        </div>
    );
};

export default Chart;