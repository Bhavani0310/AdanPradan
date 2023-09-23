import React, { Component } from 'react';
import axios from 'axios';

class WorkshopForm extends Component {
  state = {
    college_name: '',
    workshops: [
      {
        workshop_name: '',
        seats: [
          {
            seat_number: '',
          },
        ],
      },
    ],
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleWorkshopChange = (event, workshopIndex) => {
    const { name, value } = event.target;
    const workshops = [...this.state.workshops];
    workshops[workshopIndex][name] = value;
    this.setState({ workshops });
  };

  handleSeatChange = (event, workshopIndex, seatIndex) => {
    const { name, value } = event.target;
    const workshops = [...this.state.workshops];
    workshops[workshopIndex].seats[seatIndex][name] = value;
    this.setState({ workshops });
  };

  addWorkshop = () => {
    const workshops = [...this.state.workshops];
    workshops.push({
      workshop_name: '',
      seats: [
        {
          seat_number: '',
        },
      ],
    });
    this.setState({ workshops });
  };
  removeWorkshop = (workshopIndex) => {
    const workshops = [...this.state.workshops];
    workshops.splice(workshopIndex, 1);
    this.setState({ workshops });
  };


  addSeat = (workshopIndex) => {
    const workshops = [...this.state.workshops];
    workshops[workshopIndex].seats.push({
      seat_number: '',
    });
    this.setState({ workshops });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Send the data to your server using Axios
    axios.post('/api/college', this.state)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="college_name">College Name:</label>
            <input
              type="text"
              id="college_name"
              name="college_name"
              value={this.state.college_name}
              onChange={this.handleInputChange}
            />
          </div>
          {this.state.workshops.map((workshop, workshopIndex) => (
            <div key={workshopIndex}>
              <h3>Workshop {workshopIndex + 1}</h3>
              <div>
                <label htmlFor="workshop_name">Workshop Name:</label>
                <input
                  type="text"
                  id="workshop_name"
                  name="workshop_name"
                  value={workshop.workshop_name}
                  onChange={(event) => this.handleWorkshopChange(event, workshopIndex)}/>
                  <button type="button" onClick={() => this.removeWorkshop(workshopIndex)}>Remove Workshop</button>
                
              </div>
              {workshop.seats.map((seat, seatIndex) => (
                <div key={seatIndex}>
                  <h4>Seat {seatIndex + 1}</h4>
                  <div>
                    <label htmlFor="seat_number">Seat Number:</label>
                    <input
                      type="number"
                      id="seat_number"
                      name="seat_number"
                      value={seat.seat_number}
                      onChange={(event) => this.handleSeatChange(event, workshopIndex, seatIndex)}
                    />
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => this.addSeat(workshopIndex)}>Add Seat</button>
            </div>
          ))}
          <button type="button" onClick={this.addWorkshop}>Add Workshop</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default WorkshopForm;
