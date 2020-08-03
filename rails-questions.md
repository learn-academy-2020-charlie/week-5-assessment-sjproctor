# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb
library - url path
:id - params, dynamically pass info
book - name of the controller
show - name of the method in the controller


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

- update model/schema with a migration
- $ rails g migration name_of_migration
- navigate to file in db/migrate
- create a change method: add_column :table_name, :table_id, :integer
- $ rails db:migrate

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails g model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

app/model/person.rb
validates :shirt, :pants, :shoes, presence: true



6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

Rails model: Uppercase - PascalCase, singular
Rails table: lowercase - snake_case, plural
