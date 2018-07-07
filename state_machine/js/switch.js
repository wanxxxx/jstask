var Switch = function ($elem) {
    var log = function (fsm, previousState) {
        console.log('currentState is : ' + fsm.currentState + ((previousState || '') && (' , and previous state is : ' + previousState)));
    };
    return {
        currentState: 'off',
        states: {
            'on': {
                to: 'off',
                action: 'turnOff'
            },
            'off': {
                to: 'on',
                action: 'turnOn'
            }
        },
        init: function () {
            var self = this;
            $elem.on('click', (function () {
                var args = arguments;
                return function () {
                    self.transition(args);
                }
            })());
            log(this);
        },
        transition: function (e) {
            var old = this.currentState;
            this.currentState = this.states[old].to;
            var action = this.states[old].action;
            (action in this) && this[action](old);
        },
        turnOn: function (fromState) {
            $elem.addClass('on');
            log(this, fromState);
        },
        turnOff: function (fromState) {
            $elem.removeClass('on');
            log(this, fromState);
        }
    }
};