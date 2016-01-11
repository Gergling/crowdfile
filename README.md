# crowdfile

Themes:
* All profiles can be modified by the general public.
* Everyone logs in as themselves.
* People vote on a preferred profile photo.
* Duplicates are found by somebody making an initial suggestion for a duplicate.
  * Duplicates are handled by voting for or against the profile being a duplicate.
  * If more than half the contributors to both profiles vote in favour of there being a duplicate, a merged profile is created, by adding in all attributes and photos from both profiles. 
  * If a profile is marked for merging, there is a list of profiles marked as duplicates... somewhere.
  * Merge profiles may disappear if people retract their votes from the duplication ratings.
  * If a merge profile exists, users are directed there for the person, unless they specifically navigate away
* One profile can exist per user. A name has to be given. The user is strongly advised to start with some unique (recognisable) profile information.

In theory this results in a person's actual self being publicised, but one imagines there is the possibility that gangs of people will modify profiles to troll individuals by sheer numbers. The counter to this is to campaign for more people to adjust the true profile.

Essentially this is a more advanced identity-battleground-arena than the rest of the internet. The experiment will show whether the truth can ultimately win and people will learn to handle cyber-bullying better.

Traits:

I would like to implement a system whereby the profile includes 'tags'. These could represent skills, personality traits or experiences, but boil down to a single (or possibly hyphenated) keyword. People would be able to endorse a person's traits on their profile, similar to LinkedIn skills.

How these are then processed by comparison to other profiles will require thought. One imagines the number of endorsements could be compared to the number of endorsements in the rest of the profile. This might then open the possibility of comparing personalities for the purposes of networking and making friends.

Technologies:

* Frontend
 * Angularjs
* API
 * Node
  * Passport
  * Express
 * Mongo

Task Runner:

* Local build should generate things like a default login and pre-filled sample data for populating the database when it comes to manual testing.
 * Default login can be an interceptor or equivalent in a folder called 'generated' within the frontend auth module.
 * Pre-generated data can be stored in a folder in root adjacent to default login details.
* Templating generates an index.html or injects javascript into it when new source files are created.
