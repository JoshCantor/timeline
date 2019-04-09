# timeline
*How long you spent on the assignment.*
* I spent 8 hours on the assignment. The place I likely spent the most time was understanding and manipulating JS dates, date math, and handling timezones. I'm still not convinced the date utilities I built are totally bug free. For example, I'm still exploring why ```getTimeZoneDifferenceInDays``` is returning fractions of a day. 

*What you like about your implementation.*
* This implementation feels flexible enough to handle any reasonably narrow set of dates before the UI becomes unwieldy, and it would not take many changes to have it work well for a wider range or dates, or a much narrower range.
* I believe the code is reasonably straightforward and modular, with a few UI components doing most of the work, and a handful of utility functions doing the various date manipulations and transformations.

*What you would change if you were going to do it again.*
* I spent my time dialing in the basic UI and iterating to build clean abstractions for that. Perhaps next time, I would build a simpler UI that left more time for richer features (drag/drop, zoom, tooltip labels, etc). I would also consider using a date library, which likely would have decreased my time spent debugging my date utilities.      

*How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.*
* I often use Gantt charts to organize work schedules, and I find it to be an easy way to visually represent "items" that have distinct start/end dates, often with overlapping time ranges, so that came to mind as a way to build this timeline. I spent some time looking at images of Gantt charts to draw inspiration.
  
*How you would test this if you had more time.*
* I added a few additional items to the timeline to help test edges, and I'd want to have a much more through set of items to test with. As I mentioned above, a set of items with a narrow range, as well as a broad range. I would also like to build unit tests for my helper functions to make sure they're working as expected.