# Rewarder

## By [Moses Babu](https://github.com/mosesbabu/)

## Description
This is simple SPA in laravel and vue allowing foradmins to submit customer detailsand get voucher details based on their expenditure.Utilizes REST Api and frontend in vue
.




## User Stories
These are the behaviours/features that the application implements for use by a user.

As a user I would like to:
* Post user information
* Get generated voucher based on expenditure 
* view voucher status for all users


## Future Implementation
We would add some more features in future as :

*Automation of voucher calculation by eligibility

*Registration flow to automatically capture customer information,transactions 

*improving UI aspect

*Ensure voucher is generated uniquely and can be reedemed in the shopping checkout

*Abiity to detect customers birthday and automatically issue voucher




## SetUp / Installation Requirements
### Prerequisites
* Lavarel 4.1 or higher
* vue
* php
*nodejs

### Cloning
* In your terminal:

        $ git clone https://github.com/mosesbabu/rewarder/
        $ cd rewarder

## Running the Application
* Creating the virtual environment

        $ composer install
        $ compose require
        $ composer require laravel/ui
		$php artisan ui vue
		$npm install && npm run dev

* Know Bugs

        * Voucher may not generate perfectly as required to be fixed
        * 
        * Eligibiity by date of birth not perfectly working
        * 
		* Voucher is notautomatically calculated
		* 
  

* Setting up the Database

        To be able to use the app you need toconfigure the database.
* Create a mysql database with a name of your choice you can use xampp
* change the configurations in your .env file
* run
        *  php artisan migrate

         

* To run the application, in your terminal:

        $  php artisan serve
        $  npm run watch in another terminal

## Testing the Application
* 

## Technologies Used
* Laravel
* Vue
*mysql

## License

&copy 2021 mosesbabu

------------

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
