var example = (
  <div className="example-weather">
    <UIToolkit.Weather type="sunny" temperature={22} unit="C" date="2016-07-25" />
    <UIToolkit.Weather type="partly-cloudy" temperature={17} unit="C" date="2016-07-26" />
    <UIToolkit.Weather type="cloudy" temperature={14} unit="F" date="2016-07-27" />
    <UIToolkit.Weather type="light-rain" temperature={10} unit="C" date="2016-07-28" format="dddd"/>
    <UIToolkit.Weather type="heavy-rain" temperature={5} unit="C" date="2016-07-29T09:00" format="HH:mm" />
  </div>
);

React.render(example, mountNode);
