const Commands = require("../Commands");

class Homepage {
    commands = new Commands();
    allTemperatureElements = "//span[contains(text(),'°')]";
    currentTemp = "//span[contains(text(),'Now')]";
   


    async checkTimeLineArray() {

        let tempElements = await this.commands.getTextFromWebElement("//span[contains(text(),'°')]");
        for(let tempElement of tempElements) {
            text = await this.commands.getTextFromWebElement(tempElement);
            console.log(text);
        }

       






     //   let timeline =  await $$(this.allTemperatureElements)
     //return await this.commands.getTextFromWebElement(this.allTemperatureElements);


    }





}

module.exports = Homepage;


    // async checkTimeline() {
    //     for (const tempElement of this.allTemperatureElements) {
    //         console.log(await this.commands.getTextFromWebElement(this.allTemperatureElements));
    //         //return await this.commands.getTextFromWebElement(this.allTemperatureElements);
    //     }
        
    // }


        // let array = Array = [];
        // let i = 0;
        // let weatherTimeLine = await $$(this.allTemperatureElements);
        // for (const time of weatherTimeLine){
        //     array[i] = await time.getText();
        // }
        // let arrayLength = array.length;
        // return arrayLength;


// for (const tempElement of allTempElements) {
//     console.log(await tempElement.getText());
// }
