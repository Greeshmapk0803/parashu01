import '../../assets/stylesheets/DragAndDropLoader.css'

const DragandDropLoader = () => (
    <svg viewBox="0 0 100 100" class="loader">
        <g class="points">
            <circle fill="#fff" r="50" cy="50" cx="50" class="ciw"></circle>
            <circle r="4" cy="50" cx="5" class="ci2"></circle>
            <circle r="4" cy="50" cx="95" class="ci1"></circle>
        </g>
    </svg>

)

export default DragandDropLoader