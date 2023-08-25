import M from 'messages';

const formOptions = {
  inputs: [
    { id: "title", name: "title", label: M.get('meeting.title'), type: "text", variant: "outlined", required: true, validate: (value) => value.length < 3 ? {title: 'Name min length should be 3'} : {title: ''} },
    { id: "description", name: "description", label: M.get('meeting.description'), type: "text", variant: "outlined", required: true },
    { id: "startDate", name: "startDate", label: M.get('meeting.startDate'), type: "datetime-local", variant: "outlined", required: true },
    { id: "endDate", name: "endDate", label: M.get('meeting.endDate'), type: "datetime-local", variant: "outlined", required: true },
  ],
}

export { formOptions };