import { ResponsiveWaffle } from '@nivo/waffle'
import React from 'react'

const data = [
    {
      "id": "cats",
      "label": "Cats",
      "value": 27.944328363250087
    },
    {
      "id": "dogs",
      "label": "Dogs",
      "value": 2.1305615393374318
    },
    {
      "id": "rabbits",
      "label": "Rabits",
      "value": 28.851334678163944
    }
  ]

export default function MyResponsiveWaffle() {
  return (
    <div>
        <ResponsiveWaffle
          data={data}
          total={100}
          rows={18}
          columns={14}
          padding={1}
          valueFormat=".2f"
          margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
          colors={{ scheme: 'nivo' }}
          borderRadius={3}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      0.3
                  ]
              ]
          }}
          motionStagger={2}
          legends={[
              {
                  anchor: 'top-left',
                  direction: 'column',
                  justify: false,
                  translateX: -100,
                  translateY: 0,
                  itemsSpacing: 4,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  itemTextColor: '#777',
                  symbolSize: 20,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemTextColor: '#000',
                              itemBackground: '#f7fafb'
                          }
                      }
                  ]
              }
          ]}
      />
    </div>
  )
}