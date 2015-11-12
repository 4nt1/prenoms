require 'csv'
require 'json'
require 'pry'

names = CSV.parse(
          IO.read(File.open('server/db/Prenoms.csv')).force_encoding("ISO-8859-1").encode("utf-8", replace: nil)
          )

json_names = names[1..-1].flat_map do |name|
  parsed  = name[0].split(';')
  name    = parsed[0].gsub(/\s\(.*\)/, '')
  genders = parsed[1].split(',')
  langs   = parsed[2].split(',').map {|l| l.gsub(/\s\(.*\)/, '') } rescue ['']
  genders.flat_map do |gender|
    langs.flat_map do |lang|
      {
        name:   name,
        lang:   lang,
        gender: gender
      }
    end
  end
end
File.open('server/db/prenoms.js', 'w+') do |f|
  f.print('var array = [')
  json_names.each_with_index do |name, index|
    if index == json_names.length - 1
      f.print("#{name.to_json}")
    else
      f.puts("#{name.to_json},")
    end
  end
  f.print(']; module.exports = array;')
end