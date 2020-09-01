import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import './Calendar.css';
import { Modal } from 'office-ui-fabric-react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

const localizer = momentLocalizer(moment);

class GiveCalendar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal :  false,
            selectedEvent : '',
        }
    }

    displayModal = event => {
        this.setState({showModal: true, selectedEvent: event})
    }

    hideModal = event => {
        this.setState({showModal: false, selectedEvent: ''})
    }

    showEventPage = event => {
        var url = 'https://microsoft.benevity-staging.org/campaigns/'+this.state.selectedEvent.id
        window.open(url, '_blank')
    }

    render() {
        return(
            <div>
                <Calendar
                    className="calendarLayout"
                    popup
                    localizer={localizer}
                    views={{month:true, week:true, day:true}}
                    events={this.props.events}
                    defaultDate={new Date(2020, 9, 1)}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectEvent={this.displayModal}
                    eventPropGetter={
                        (event, start, end, isSelected) => {
                            let newStyle = {
                                backgroundColor: "#8661c5",
                                color: 'white'
                            }
                            return {
                                style: newStyle
                            };
                        }
                    }
                />
                <Modal
                    isOpen={this.state.showModal}
                    onDismiss={this.hideModal}
                    className="modalStyle"
                >
                    <div>
                        <h2>{this.state.selectedEvent.title}</h2>
                        <p>
                            {this.state.selectedEvent.description}
                        </p>
                        <DefaultButton text="Go To Event Page" onClick={this.showEventPage} className="modalButton"/>
                        <DefaultButton text="Dismiss" onClick={this.hideModal} className="modalButton"/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default GiveCalendar;