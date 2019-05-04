
        if (navigator.geolocation) {
            console.log("navigator.geolocation is available");
            let self = this;
            navigator.geolocation.getCurrentPosition(function (position) {
                self.setState({ lat: position.coords.latitude })
                self.setState({ lng: position.coords.longitude })
                console.log(position.coords.latitude)
            });
        }

        {`lat : ${this.state.lat}`}
                {`lng : ${this.state.lng}`}