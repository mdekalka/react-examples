import React, { useState } from "react"

import Modal from "./Modal"

export const ModalPortal = () => {
  const [opened, setOpened] = useState(true)

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum perferendis, quibusdam dicta numquam impedit in eos laudantium veniam placeat facilis tenetur beatae, accusamus illo laborum, magni nam distinctio enim quo.
      Modi doloribus tempora aut molestias ullam labore expedita cumque! Mollitia rerum, tenetur cum pariatur culpa asperiores, ipsa repellat soluta ullam vitae maiores cupiditate nesciunt itaque, magni sequi. Eaque, deserunt laudantium!
      Dicta nobis recusandae velit magni cum! Unde consequuntur, distinctio necessitatibus accusamus pariatur corporis impedit nemo quod fuga iusto maiores nam minus, nesciunt, aperiam laudantium voluptatem quis eos nisi. Ex, necessitatibus?
      <button onClick={() => setOpened(!opened)}>toggle modal</button>

      <Modal isOpen={opened} onClose={() => setOpened(false)}>
        <h4>I'm modal with portal</h4>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis inventore, ratione aliquam molestias maiores possimus ea qui non numquam quia eveniet enim recusandae vero necessitatibus quibusdam animi deserunt. Ullam, possimus. Numquam officiis repudiandae, in quasi architecto blanditiis quod iusto ab nisi, aliquam sunt excepturi labore. Exercitationem ea quo hic id, magnam, cumque quia perferendis voluptatum enim mollitia similique debitis, maxime repudiandae corporis voluptatem nesciunt commodi voluptate architecto doloremque? Ut ipsum incidunt eum facilis nobis adipisci quae esse maiores molestiae! Nesciunt, facere temporibus!</div>
      </Modal>
    </div>
  )
}
