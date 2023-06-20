import { Suspense } from "react";
import Container from "../Container/Container";
import Spinner from "../../utils/Spinner";
import AppBar from "../AppBar";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <Container>
            <Suspense fallback={<Spinner />}>
                <AppBar />
                <Outlet />
            </Suspense>
        </Container>
    );
};