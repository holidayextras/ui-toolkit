#Writing a semantic date-picker

Over the years we have been using jQuery date picker.
Moved to a mobile first company
jQuery UI and jQuery mobile - bulky, hard to style, hard for brand identity.

starting point, the HTML, what is the best semantic markup for a date picker? starting with the lowest common denominator (day)
- table - although a gregorian calendar is often laid out in a table format, is it really tabular data? we need to make sure we don’t confuse a calendars design with its content.
- ol > Li - a day is a ordered list of days?
```
<ol class=“days”>
	<li class=“day”></li>
</ol>
```
is the ol infact a month? as a month is a list of days
```
<ol class=“month”>
	<li class=“days”></li>
</ol>
```

sounds plausible..

months and days are covered, well a month is an ordered list of year..

```
<ol class=“year”>
	<li class=“month”></li>
</ol>
```

but we already established month as an <ol> previously and semantically you can’t have a <ol> as a child of another <ol> without an <li>

so how about this...
```
<ol class=“century”>
	<li class=“year”>
		<ol class=“month”>
			<li class=“day”></li>
		</ol>
	</li>
</ol>
```

So lets talk about labelling each day/month
each day, month, year and even century, should be labelled with it’s name, for this example we are using english but of course we need to allow this to be multi-lingual.

```
<ol class=“century”>
	<h3>20</h3>
	<li class=“year”>
		<h3>15</h3>
		<ol class=“month”>
			<h3>March</h3>
			<li class=“day”>21</li>
		</ol>
	</li>
</ol>
```

There are inherit problems here, lets start with the semantic problem
- The month label can not be a child of an <ol> without being and <li>

The other issue is around the “human” wording of the century and its subsequent year. Nobody really says “it’s the 15th year of the 20th century” they say its “2015”

so the suggestion would be to label he month outside the <ol>
```
<ol class=“century”>
	<h1>2015</h1>
	<li class=“year”>
		<h1>March</h1>
		<ol class=“month”>
			<li class=“day”>21</li>
		</ol>
	</li>
</ol>
```

this seems like a much better solution, your header is before the element, it makes sense.

We started using this idea for mockups and then came across another small issue.
how do you group the month with its header?

for example, i want to hide all months except this month.
i’d get into css craziness with nth-of-types all over.
```
<ol class=“century”>
	<h1>2015</h1>
	<li class=“year”>
		<div class=“month-confiner”>
			<h1>March</h1>
			<ol class=“month”>
				<li class=“day”>21</li>
			</ol>
		</div>
	</li>
</ol>
```
argue i hate un-necessary divs and “containers”

okay lets star from the beginning…
```
 <ol class=“years”>
    <li class=“year”>
      <h1>2015</h1>
      <ol class=“months”>
        <li class=“month”>
          <h1>February</h1>
          <ol class=“days”>
            <li class=“day”></li>
					</ol>
				</li>
			</ol>
		</li>
</ol>
```
is this overkill?

##In summary
Is there a right way to semantically mark up a date-picker?
Let me know yours thoughts.
