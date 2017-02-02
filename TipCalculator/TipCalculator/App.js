var TipCalculator = angular.module("TipCalculator", []);

TipCalculator.controller('TipCalculatorController', [
    '$scope',function($scope){
        var tcc = this;
        
        

        tcc.holdTip = 0;
        tcc.tipPercent;
        tcc.totalAddedAmount = 0;
        tcc.AddedStateTax = 0;
        tcc.stateTax = 0;
        tcc.priceValue = 0;
        tcc.totalAmount = 0;
        tcc.state = [
            {
              state_name: "Alabama",
              state_code: "AL",
              state_tax: .04
            },
            {
              state_name: "Alaska",
              state_code: "AK",
              state_tax: .00
            },
            {
              state_name: "Arizona",
              state_code: "AZ",
              state_tax: .056
            },
            {
              state_name: "Arkansas",
              state_code: "AR",
              state_tax: .065
            },
            {
              state_name: "California",
              state_code: "CA",
              state_tax: .0725
            },
            {
              state_name: "Colorado",
              state_code: "CO",
              state_tax: .029
            },
            {
              state_name: "Connecticut",
              state_code: "CT",
              state_tax: .0635
            },
            {
              state_name: "Delaware",
              state_code: "DE",
              state_tax: .00
            },
            {
              state_name: "Florida",
              state_code: "FL",
              state_tax: .06
            },
            {
              state_name: "Georgia",
              state_code: "GA",
              state_tax: .04
            },
            {
              state_name: "Hawaii",
              state_code: "HI",
              state_tax: .04
            },
            {
              state_name: "Idaho",
              state_code: "ID",
              state_tax: .06
            },
            {
              state_name: "Illinois",
              state_code: "IL",
              state_tax: .0625
            },
            {
              state_name: "Indiana",
              state_code: "IN",
              state_tax: .07
            },
            {
              state_name: "Iowa",
              state_code: "IA",
              state_tax: .06
            },
            {
              state_name: "Kansas",
              state_code: "KS",
              state_tax: .065
            },
            {
              state_name: "Kentucky",
              state_code: "KY",
              state_tax: .06
            },
            {
              state_name: "Louisiana",
              state_code: "LA",
              state_tax: .05
            },
            {
              state_name: "Maine",
              state_code: "ME",
              state_tax: .055
            },
            {
              state_name: "Maryland",
              state_code: "MD",
              state_tax: .06
            },
            {
              state_name: "Massachusetts",
              state_code: "MA",
              state_tax: .0625
            },
            {
              state_name: "Michigan",
              state_code: "MI",
              state_tax: .06
            },
            {
              state_name: "Minnesota",
              state_code: "MN",
              state_tax: .06875
            },
            {
              state_name: "Mississippi",
              state_code: "MS",
              state_tax: .07
            },
            {
              state_name: "Missouri",
              state_code: "MO",
              state_tax: .04225
            },
            {
              state_name: "Montana",
              state_code: "MT",
              state_tax: .00
            },
            {
              state_name: "Nebraska",
              state_code: "NE",
              state_tax: .055
            },
            {
              state_name: "Nevada",
              state_code: "NE",
              state_tax: .0685
            },
            {
              state_name: "New Hampshire",
              state_code: "NH",
              state_tax: .00
            },
            {
              state_name: "New Jersey",
              state_code: "NJ",
              state_tax: .06875
            },
            {
              state_name: "New Mexico",
              state_code: "NM",
              state_tax: .05125
            },
            {
              state_name: "New York",
              state_code: "NY",
              state_tax: .04
            },
            {
              state_name: "North Carolina",
              state_code: "NC",
              state_tax: .0475
            },
            {
              state_name: "North Dakota",
              state_code: "ND",
              state_tax: .05
            },
            {
              state_name: "Ohio",
              state_code: "OH",
              state_tax: .0575
            },
            {
              state_name: "Oklahoma",
              state_code: "OK",
              state_tax: .045
            },
            {
              state_name: "Oregon",
              state_code: "OR",
              state_tax: .00
            },
            {
              state_name: "Pennsylvania",
              state_code: "PA",
              state_tax: .06
            },
            {
              state_name: "Rhode Island",
              state_code: "RI",
              state_tax: .07
            },
            {
              state_name: "South Carolina",
              state_code: "SC",
              state_tax: .06
            },
            {
              state_name: "South Dakota",
              state_code: "SD",
              state_tax: .045
            },
            {
              state_name: "Tennessee",
              state_code: "TN",
              state_tax: .07
            },
            {
              state_name: "Texas",
              state_code: "TX",
              state_tax: .0625
            },
            {
              state_name: "Utah",
              state_code: "UT",
              state_tax: .0595
            },
            {
              state_name: "Vermont",
              state_code: "VT",
              state_tax: .06
            },
            {
              state_name: "Virginia",
              state_code: "VA",
              state_tax: .053
            },
            {
              state_name: "Washington",
              state_code: "WA",
              state_tax: .065
            },
            {
              state_name: "West Virginia",
              state_code: "WV",
              state_tax: .06
            },
            {
              state_name: "Wisconsin",
              state_code: "WI",
              state_tax: .05
            },
            {
              state_name: "Wyoming",
              state_code: "WY",
              state_tax: .04
            },
            ]
            
        tcc.selected_state = tcc.state[0];
     
        tcc.assign10 = function(){
            tcc.holdTip = 10;
            tcc.tipPercent = .1;
        }
        tcc.assign15 = function(){
            tcc.holdTip = 15;
            tcc.tipPercent = .15;
        }
        tcc.assign20 = function(){
            tcc.holdTip = 20;
            tcc.tipPercent = .2;
        }
        
        
        
        tcc.calculate = function(){
            tcc.AddedStateTax = tcc.priceValue *  tcc.selected_state.state_tax;
            tcc.AddedTip = tcc.priceValue * tcc.tipPercent;
            tcc.totalAmount = Number(tcc.priceValue) + tcc.AddedStateTax + tcc.AddedTip;
            
        }
        
    }]);