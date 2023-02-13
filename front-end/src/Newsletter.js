function Newsletter(){

    const obj=[
        {
            'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        }
    ]

    return(
        <>
        <div id="head-view">
            <div id="title-view">
                Newsletter
            </div>
            <div id="title2-view">
                One Stop Place for News Curated for you
            </div>
        </div>
        <div id="hr-view">

        </div>
        <div id="content-view">
            <div id="full-content-view">
                <div id="box-title-view">
                    University
                </div>
                <div id="box-view">
                {obj.map((val)=>{
                    return (
                        <>
                        <div id="box-text-view">
                            {val.title}
                            </div>
                            <div id="box-hr-view">

                            </div>
                        </>
                    )
                })}
                    <button id="box-button-view">
                        View All
                    </button>
                </div>
            </div>
            <div id="full-content-view">
                <div id="box-title-view">
                    Local
                </div>
                <div id="box-view">
                    {obj.map((val)=>{
                        return (
                            <>
                            <div id="box-text-view">
                                {val.title}
                                </div>
                                <div id="box-hr-view">

                                </div>
                            </>
                        )
                    })}
                    <button id="box-button-view">
                        View All
                    </button>
                </div>
            </div>
            <div id="full-content-view">
                <div id="box-title-view">
                    Other Universities
                </div>
                <div id="box-view">
                    {obj.map((val)=>{
                        return (
                            <>
                            <div id="box-text-view">
                                {val.title}
                                </div>
                                <div id="box-hr-view">

                                </div>
                            </>
                        )
                    })}
                    <button id="box-button-view">
                        View All
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Newsletter