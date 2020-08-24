# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = [
    {
        email: "danny@phantom.com",
        password: "test123",
        password_confirmation: "test123"
    }
]

user.each do |attribute|
    User.create attribute
end

puts "Users loaded"

apartments = [
    {
        street: "123 Oceanside Blvd",
        city: "Carlsbad",
        state: "CA",
        manager: "Karen",
        email: "dodgersfan1962@aol.com",
        price: "3400",
        bedrooms: 4,
        bathrooms: 2.5,
        pets: "no"
    }
]

test_user = User.first

apartments.each do |attribute|
    test_user.apartments.create attribute
end

puts "Apartments loaded"