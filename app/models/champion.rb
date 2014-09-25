class Champion < ActiveRecord::Base
  after_create :image_name_gen

  def self.get_api_data
    champion_info_url = "https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key="
    resp = HTTParty.get("#{champion_info_url}#{ENV['RIOT_KEY']}")
    resp["data"].each do |name, info|
      name = 'Wukong' if name == 'MonkeyKing'
      to_store = {
        name: name,
        title: info["title"],
        key: info["id"],
      }
      Champion.create(to_store)
    end
  end

  def image_name_gen
    new_name = ""
    self.name.split('').each_with_index do |n, i|
      if (n == n.upcase && i != 0)
        new_name += " #{n}"
      else
        new_name += n
      end
    end
    self.image_name = new_name
    self.save
  end

end