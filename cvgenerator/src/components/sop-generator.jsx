class SOPDocumentCreator {
    createSOP(sopContent) {
        const sentences = sopContent.split('.'); // Split SOP content into sentences
        const document = new Document({
            sections: [
                {
                    properties: {
                        margin: {
                            top: 0,
                            right: 720,
                            bottom: 720,
                            left: 720,
                        },
                    },
                    children: [
                        sentences.map((sentence, index) => (
                            <Paragraph>
                                {sentence}
                                {index % 4 === 3 ? (
                                    <>
                                        <TextRun text="" spacing={{ after: 200 }} />
                                        <TextRun text="" spacing={{ after: 200 }} />
                                    </>
                                ) : null}
                            </Paragraph>
                        )),
                    ],
                },
            ],
        });

        return document;
    }
}