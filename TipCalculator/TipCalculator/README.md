# Tip Calculator

This helps customers to be more aware of their purchases by way
of tax and tip amounts. Included are three easy buttons to
choose quick percents.



### Getting Started

1. Download files/ open [this link](https://preview.c9users.io/alwilliamson1/mobile-applications/TipCalculator/Index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io)
2. Type your initial subtotal in the text box
3. Select your state
4. Select your quick percent (tip amount)
5. Press GO!

### How it works

The text box, select box, and tip buttons dynamically change the 
text lower on the screen. The **'GO!'** button runs the actual calculation.

```
        tcc.calculate = function(){
            tcc.AddedStateTax = tcc.priceValue *  tcc.selected_state.state_tax;
            tcc.AddedTip = tcc.priceValue * tcc.tipPercent;
            tcc.totalAmount = Number(tcc.priceValue) + tcc.AddedStateTax + tcc.AddedTip;
            
```

##### Notes
For some reason I had to include 
```
Number(tcc.priceValue)
```
in the code, otherwise it would concantenate the variables like they were
strings. I do use this variable earlier in the code to perform math though, so I'm 
not sure what went wrong there.

##### Aaron Williamson