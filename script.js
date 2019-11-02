document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const _$ = document,
            orginCity = {"flightdetails":[{"chennai":[{"flightName":"Indigo","flightId":"202","depatureTime":"9.00am","arrivalTime":"12.00pm","price":"3500"},{"flightName":"Air India","flightId":"203","depatureTime":"1.30pm","arrivalTime":"4.30pm","price":"4000"},{"flightName":"Jet Airways","flightId":"204","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"},{"flightName":"Spice Jet","depatureTime":"6.00pm","flightId":"205","arrivalTime":"9.00pm","price":"3850"}]},{"mumbai":[{"flightName":"Indigo","flightId":"301","depatureTime":"9.00am","arrivalTime":"12.00pm","price":"3500"},{"flightName":"Air India","flightId":"302","destinationPlace":"Delhi","depatureTime":"1.30pm","arrivalTime":"4.30pm","price":"4000"},{"flightName":"Jet Airways","flightId":"303","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"},{"flightName":"Spice Jet","flightId":"304","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"}]},{"delhi":[{"flightName":"Indigo","flightId":"401","depatureTime":"9.00am","arrivalTime":"12.00pm","price":"3500"},{"flightName":"Air India","flightId":"402","depatureTime":"1.30pm","arrivalTime":"4.30pm","price":"4000"},{"flightName":"Jet Airways","flightId":"403","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"},{"flightName":"Spice Jet","flightId":"404","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"}]},{"kolkatta":[{"flightName":"Indigo","flightId":"501","depatureTime":"9.00am","arrivalTime":"12.00pm","price":"3500"},{"flightName":"Air India","flightId":"502","depatureTime":"1.30pm","arrivalTime":"4.30pm","price":"4000"},{"flightName":"Jet Airways","flightId":"503","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"},{"flightName":"Spice Jet","flightId":"504","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"}]},{"bangalore":[{"flightName":"Indigo","flightId":"601","depatureTime":"9.00am","arrivalTime":"12.00pm","price":"3500"},{"flightName":"Air India","flightId":"602","depatureTime":"1.30pm","arrivalTime":"4.30pm","price":"4000"},{"flightName":"Jet Airways","flightId":"603","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"},{"flightName":"Spice Jet","flightId":"604","depatureTime":"6.00pm","arrivalTime":"9.00pm","price":"3850"}]}]},
            submitBtn = _$.querySelector('#submit-btn'),
            flightDetails = orginCity.flightdetails;
        
        console.log(flightDetails);

        let originPlace =_$.getElementById('origin-value'),
            destinationPlace =_$.getElementById('destination-value'),
            startDate =_$.getElementById('startdate-value'),
            returnDate =_$.getElementById('return-value'),
            passengers =_$.getElementById('passengers-list');

        submitBtn.addEventListener('click', function () {
            if(originPlace.value == "" && destinationPlace.value == "" && startDate.value == "") {
                alert("Please Fill All Required Field");
            }
            else {
                originplaceValue = originPlace.value;
                destinationValue = destinationPlace.value;
                startDateValue = startDate.value;
                returnDateValue = returnDate.value;
                passengersValue = passengers.value;

                if(returnDateValue == ""){
                    _$.querySelector('.booking-section').classList.add('no-return');
                }
                
                _$.querySelector('.flight-list').innerHTML = "";
                getResults(originplaceValue, destinationValue, startDateValue, returnDateValue, passengersValue);
                return false;
            }
        });

        const getResults = (originplaceValue, destinationValue, startDateValue, returnDateValue, passengersValue) => {
            for (i = 0; i < flightDetails.length; ++i) {
                let eachFlights = flightDetails[i];
                Object.entries(eachFlights).forEach(([key, value]) => {
                    
                    if(key == originplaceValue) {

                        for (j = 0; j < value.length; ++j) {
                            let eachValue = value[j];
                            let journeyFrom = _$.querySelector('.journey-from');
                            let journeyTo = _$.querySelector('.journey-to');
                            let startDate = _$.querySelector('.start-date');
                            let returnDate = _$.querySelector('.return-date');

                            journeyFrom.innerHTML = originplaceValue;
                            journeyTo.innerHTML = destinationValue;
                            startDate.innerHTML = startDateValue;
                            returnDate.innerHTML = returnDateValue;

                            _$.querySelector('.flight-list').insertAdjacentHTML('beforeend', '<li class="flight-details"><div class="about-details"><h2>'+ eachValue.price +'</h2><ul class="depature-details"><li class="flight-id">'+ eachValue.flightId +'</li><li class="flight-journey"><span class="origin-city">'+ originplaceValue +'</span><span class="destination-city">'+ destinationValue +'</span></li><li class="flight-depart">'+'Depart '+'<span class="depart-time">'+ eachValue.depatureTime +'</span></li><li class="flight-arival">'+'Arrival '+'<span class="arrival-time">'+ eachValue.arrivalTime +'</span></li></ul><ul class="return-details"><li class="flight-id">'+ eachValue.flightId +'</li><li class="return-journey"><span class="return-origin">'+ destinationValue +'</span><span class="return-destination">'+ originplaceValue +'</span></li><li class="return-depart">'+'Depart '+'<span class="return-depart">'+ eachValue.arrivalTime +'</span></li><li class="return-arrival">'+'Arrival '+'<span class="return-arrival">'+ eachValue.depatureTime +'</span></li></ul></div><div class="about-flight"><img src="flight-inner.jpg"><button>'+ 'Book' + ' '+'the'+' '+'flight'+'</button></div></li>')
                            _$.querySelector('.booking-section').classList.add('show-result');
                        };
                    }
                })
            }
        }
    }
}