require "kemal"
require "./crystal_clear/*"

module CrystalClear
  get "/" do
    render "src/views/index.ecr", "src/views/layouts/layout.ecr"
  end
  ws "/ws" do |socket|
    socket.send "Hello from kemal"

    socket.on_message do |message|
      socket.send "Echo back from server #{message}"
    end

    socket.on_close do
      puts "closing socket"
    end
  end
end

Kemal.run
