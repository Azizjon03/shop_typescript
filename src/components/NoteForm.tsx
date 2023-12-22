
import { FC, FormEvent, useRef, useState } from 'react'
import { Row, Col, Form, Stack, FormLabel, FormControl, Button } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable'
import { NoteForm, Tag } from '../types/App'

type NoteFormTypes = {
    onSubmit: (data: NoteForm) => void
}
const NoteForm: FC<NoteFormTypes> = ({ onSubmit }) => {
    const title = useRef<HTMLInputElement>(null)
    const markdown = useRef<HTMLTextAreaElement>(null)
    const [selecteTag, setSelectedTag] = useState<Tag[]>([])
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit({
            title: title?.current!.value,
            marksdown: markdown.current!.value,
            tags: []
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row >
                    <Col>
                        <Form.Group controlId='Title'>
                            <FormLabel>Title</FormLabel>
                            <FormControl ref={title} required />

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId='Tages'>
                            <FormLabel>Tages</FormLabel>
                            <CreatableReactSelect value={selecteTag.map((tag) => {
                                return { label: tag.label, value: tag.id }
                            })}
                                onChange={tags => {
                                    setSelectedTag((tags.map((tag) => {
                                        return { label: tag.label, id: tag.value }
                                    })))
                                }} isMulti />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId='markdown'>
                            <FormLabel>Body</FormLabel>
                            <FormControl required as="textarea" rows={15} ref={markdown} />
                            <Stack direction='horizontal' gap={2} className='justify-content-end mt-2'>
                                <Button type='submit' variant='primary'>Save</Button>
                                <Button type='button' variant='outline-secondary'>Cancel</Button>
                            </Stack>
                        </Form.Group>
                    </Col>
                </Row>
            </Stack>
        </Form>
    )
}
export default NoteForm