const store = {
    outputImage: null,
    text: {
        content: "五千兆円欲しい",
        output: '<span class="horizontal-content-text">五</span><span class="horizontal-content-text">千</span><span class="horizontal-content-text">兆</span><span class="horizontal-content-text">円</span><span class="horizontal-content-text">欲</span><span class="horizontal-content-text">し</span><span class="horizontal-content-text">い</span>',
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
        }, 100);
    },
    onInputContent: () => {
        vm.text.output = vm.text.content
                                    .replace(/(.)/g, '<span class="horizontal-content-text">$1</span>')
                                    .replace(/(〜|ー|、|。)/g, '<span class="rotate-text">$1</span>')
                                    .replace(/(?:\r\n|\r|\n)/g, '<br>');
    },
    onInputName: () => {
        vm.text.outputName = vm.text.name
                                    .replace(/[^<](\/)/g, '／')
                                    .replace(/(.)/g, '<span class="horizontal-content">$1</span>');
    },
};

const vm = new Vue({
    el: "#app",
    data: store,
    methods: methods
});