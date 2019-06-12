const store = {
    outputImage: null,
    text: {
        content: "五千兆円欲しい",
        output: "五千兆円欲しい",
        name: "IT・20代",
        outputName: "<span class='horizontal-content'>I</span><span class='horizontal-content'>T</span><span class='horizontal-content'>・</span><span class='horizontal-content'>2</span><span class='horizontal-content'>0</span><span class='horizontal-content'>代</span>",
        color: "#009051"
    }
};

const methods = {
    onSave: () => {
        setTimeout(()=> {
            html2canvas(document.querySelector("#generator-frame")).then(canvas => {
                vm.outputImage = canvas.toDataURL();
            });
        }, 1000);
    },
    onInputContent: () => {
        vm.text.output = vm.text.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
        methods.onSave();
    },
    onInputName: () => {
        vm.text.outputName = vm.text.name
                                    .replace(/[^<](\/)/g, '／')
                                    .replace(/(.)/g, '<span class="horizontal-content">$1</span>');
        methods.onSave();
    },
};

const vm = new Vue({
    el: "#app",
    data: store,
    methods: methods,
    mounted: function() {
        this.onSave();
    }
});