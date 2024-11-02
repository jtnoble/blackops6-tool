import BeamsmasherMathPuzzle from "../../../components/beamsmasher_math_puzzle";

const Beamsmasher = () => {

    return (
        <div>
            <h1>Beamsmasher</h1>
            <article>
                <p>The Beamsmasher Wonder Weapon has a primary fire that shoots a laser beam at zombies, along with a secondary fire that disorients zombies making for an easier time eliminating or escaping.</p>
                <section>
                    <h4>Power and The Laptops</h4>
                    <p>First order of business, you need to turn on the three amp generators for power, and power on the three laptops around the map. The game will guide you through where to get turn on the amp generators and activate pack-a-punch</p>
                    <p>As for laptops, you will need to interact with all three around the map.</p>
                    <ul>
                        <li>By the docks, a little above where you might enter the water to get around the islands.</li>
                        <li>Near the stamin-up machine.</li>
                        <li>Outside the spawn area.</li>
                    </ul>
                    <p>Once the laptops are powered on, you are ready to move to the next step.</p>
                </section>

                <section>
                    <h4>Opening The Secret Lab Door</h4>
                    <p>Before moving forward, you are going to need a bullet weapon with Dead-Wire on it. Apply this to a weapon of your choice and head down to the pack-a-punch station.</p>
                    <p>With the pack-a-punch in the basement, send yourself upstairs and peer through the window to an observatory on your way up. In there is a electrical box that you will need to shoot with your Dead-Wire weapon.</p>
                    <p>After shooting this one, you will look around and follow the wires to each of the electrical boxes in a row, shooting them with your Dead-Wire weapon.</p>
                    <p>Once the last electrical box is shot at, the door to the lab will open up.</p>
                </section>

                <section>
                    <h4>Retreiving the Multiphasic Resonator</h4>
                    <p>After entering the secret lab, there will be a zombie under some wrecked shelving. Kill him for the EMF Fob.</p>
                    <p>Take the EMF Fob over to the C-Tower where there is a briefcase with a severed hand holding it. Open it for the Multiphasic Resonator. Take this back to the lab where you will need to solve some basic algebra.</p>
                </section>
                
                <section>
                    <h4>Multiphasic Resonator Math Puzzle</h4>
                    <p>Interact with the computer in the secret lab to bring up some sticky notes with symbols. You can either solve this by yourself, or use the following solver. Optionally, you can also go back to Peck at this point and spend 5000 essence to have the puzzle solved for you. Enter the correct answers in the computer.</p>
                    <BeamsmasherMathPuzzle></BeamsmasherMathPuzzle>
                </section>

                <section>
                    <h4>Island Hopping</h4>
                    <p>After inputting the puzzle, you will need to pick up the Multiphasic Resonator and bring it with you to some Islands. The computer will show you the locations you need to go to; however, you can also just jump in a boat and travel to the islands.</p>
                    <p>Your first island will have a blue orb on it. Interact under the orb to place the Multiphasic Resonator down. Zombies are going to spawn here. Kill a few, but not too fast, as one of the ones with glowing eyes will be "shocked" by the orb. Kill this zombie to have a smaller orb drop, then pick up the smaller orb and bring it to the bigger one. Do this one more time and the big orb should move to another island.</p>
                    <p>Repeat this step for the next two islands, the colors being green followed by purple (don't forget to grab the Multiphasic Resonator from the location where the orb was each time)</p>
                </section>
                
                <section>
                    <h4>Crafting the Beamsmasher</h4>
                    <p>Now that you have completed these orbs, the Multiphasic Resonator will turn into the Amp Munition. Bring this back to the secret lab and use the bench in the back to craft your Beamsmasher.</p>
                </section>
            </article>

            
            
        </div>
    )
}

export default Beamsmasher;