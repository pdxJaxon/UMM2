# UMockMe (2)

Description pending

### Config
UMockMe uses [dotenv]: <https://www.npmjs.com/package/dotenv>
for configuration. This allows using standard environment variables within
the application code, while defining them in an `.env` file. Because each developer
can set values unique to their own environment, the `.env` file is not checked
into the repo. A `.envtemplate` file is included with default values, which can
be copied into a `.env` file for local use.

### Database

UMockMe uses [sequelize]: <https://sequelize.org/master/> for database connectivity.
Currently, we sync the database on server startup. This will eventually be replaced
with migrations.

### Testing

#### Debugging

You can debug your tests by adding "debugger" into your test code, where you'd
like to stop and inspect the running environment. Then:
-- Run `npm run debugTest`
-- Open Chrome and type `chrome://inspect` into the address bar
-- You'll see an "inspect" link (at the bottom of the pages contents)
-- Once in the debugger, you'll be stopped at the definition of "debug"
-- Click the "Resume" button (green arrow in the upper right hand corner) to proceed
to your breakpoint.
-- Happy debugging!
