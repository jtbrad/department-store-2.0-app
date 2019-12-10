def seedDepartment
  department = Department.create(
    name: Faker::Commerce.department
  )

  10.times do
    department.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f
    )  
  end

end

10.times do
  seedDepartment()
end

puts "Database Seeded"