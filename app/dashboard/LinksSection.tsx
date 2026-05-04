"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { EmptyLinksState } from "./EmptyLinksState";
import { LinkItem } from "./LinkItem";
import AddLinkBox from "./AddLinkBox";

export function LinksSection({
    username,
    links,
    showAdd,
    setShowAdd,
    onExport,
    onAdd,
    onUpdate,
    onToggleVisibility,
    onDelete,
}: any) {
    return (
        <Card>
            <CardHeader className="flex justify-between items-center">
                <CardTitle>Your Links</CardTitle>
                <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={onExport}>
                        Export CSV
                    </Button>
                    <Button size="sm" onClick={() => setShowAdd((v: boolean) => !v)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Link
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {showAdd && <AddLinkBox onAdded={onAdd} />}

                {links.length === 0 && !showAdd && (
                    <EmptyLinksState onAdd={() => setShowAdd(true)} />
                )}

                {links.map((link: any) => (
                    <LinkItem
                        key={link.id}
                        link={link}
                        username={username}
                        onUpdate={onUpdate}
                        onToggleVisibility={onToggleVisibility}
                        onDelete={onDelete}
                    />
                ))}
            </CardContent>
        </Card>
    );
}
