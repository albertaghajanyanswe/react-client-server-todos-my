import M from 'messages';

const pages = [
    { id: "users", name: "users", label: M.get('navbar.users'), link: '/users' },
    { id: "todo", name: "todo", label: M.get('navbar.todo'), link: '/todo' },
    { id: "meeting", name: "meeting", label: M.get('navbar.meeting'), link: '/meeting' },
    { id: "products", name: "products", label: M.get('navbar.products'), link: '/products' },
];

const settings = [
    { id: "logout", name: "logout", label: M.get('navbar.logout') },
];

export { pages, settings };