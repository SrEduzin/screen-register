module localhost.com/server

go 1.20

replace localhost.com/router => ./src

replace localhost.com/login => ./src/login

replace localhost.com/account => ./src/account

require localhost.com/router v0.0.0-00010101000000-000000000000

require (
	localhost.com/account v0.0.0-00010101000000-000000000000 // indirect
	localhost.com/login v0.0.0-00010101000000-000000000000 // indirect
)
