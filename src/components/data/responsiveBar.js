import React from "react";
import { ResponsiveBar } from '@nivo/bar';
import arrivage from "./../../aramis-auto/Data.json"


const dataWithPercentages = arrivage.map(item => {
    const tailleParking = item["Taille Parking"];
    return {
        ...item,
        "Vente %": ((item["Vente"] / tailleParking) * 100).toFixed(2),
        "Arrivage %": ((item["Arrivage"] / tailleParking) * 100).toFixed(2),
        "Deals potentiels %": ((item["Deals potentiels"] / tailleParking) * 100).toFixed(2),
    };
});

const MyResponsiveBar = () => (



    <ResponsiveBar
        data={(dataWithPercentages)}
        keys={[
            'Vente %',
            'Arrivage %',
            'Deals potentiels %',

        ]}
        indexBy="Modèle"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor="#0b2edb"
        


        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Véhicule',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Total',
            legendPosition: 'middle',
            legendOffset: -55,
            truncateTickAt: 0
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
    />
)


export default MyResponsiveBar;