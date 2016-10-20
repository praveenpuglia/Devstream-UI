import React from 'react'
import moment from 'moment'

export default class PunchCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    let card = [], 
      week = [],
      currentDate = moment(),
      indexDate = moment().subtract(1, 'year').subtract(1, 'day'),
      weekDays = [ 'Mon', 'Wed', 'Fri'],
      count = 0,
      data = this.props.data

    // add inactive punch days
    for (let index = 0; index < parseInt(indexDate.format('d')); index++ ) {
      week.push(<div className='punch-day inactive'></div>)      
    }

    //while (!indexDate.isSame(currentDate)) {
    while (indexDate.format('MM-DD-YYYY') !== currentDate.format('MM-DD-YYYY')) {
      let day = indexDate.format('d'),
        title = indexDate.format('DD MMM YYYY'),
        classes = 'punch-day '

      if (data && data[count] && data[count].date) {
        if (indexDate.format('DD-MM-YYYY') === data[count].date) {
          const dataCount = data[count].count
          if (dataCount > 0) {
            if ( dataCount < 2 ) {
              classes += 'punch-contribution-0'
            } 
            else if ( dataCount < 4 ) {
              classes += 'punch-contribution-1'
            }
            else if ( dataCount < 6 ) {
              classes += 'punch-contribution-2'
            }
            else {
              classes += 'punch-contribution-3'
            }
          }

          count++
        }
      }

      week.push(<div title={ title } className={ classes }></div>)

      if (day === '6') {
        card.push(<div className='punch-week'>{ week }</div>)
        week = []
      }

      indexDate.add(1, 'day')
    }
    
    // add last week
    card.push(<div className='punch-week'>{ week }</div>)

    return (
      <div className="punch-card">
        <div className="punch-display-days">
          {
            weekDays.map((weekDay) => (<div className="punch-display-day">{ weekDay }</div>))
          }
        </div>
        <div className="punch-card-weeks">
          { card }
        </div>    
      </div>
    )
  } 
}
