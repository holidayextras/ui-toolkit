var example = (
  <div className="example-weather">
    <UIToolkit.Weather weather="sunny" temperature="22" unit="c" dayOfWeek="Mon" />
    <UIToolkit.Weather weather="partly-cloudy" temperature="17" unit="c" dayOfWeek="Tue" />
    <UIToolkit.Weather weather="cloudy" temperature="14" unit="c" dayOfWeek="Wed" />
    <UIToolkit.Weather weather="light-rain" temperature="10" unit="c" dayOfWeek="Thu" />
    <UIToolkit.Weather weather="heavy-rain" temperature="5" unit="c" dayOfWeek="Fri" />
  </div>
);

React.render(example, mountNode);
