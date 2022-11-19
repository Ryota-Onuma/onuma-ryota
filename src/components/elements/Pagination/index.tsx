import React from 'react';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Pagination as MuiPagination, PaginationItem } from '@mui/material';

import { PaginationStyle as Style } from './style';

export type PaginationProps = {
  current?: number;
  total?: number;
  onChange?: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const { current, total, onChange } = props;
  return (
    <div className="text-sm flex justify-between">
      <MuiPagination
        count={total}
        page={current}
        boundaryCount={1}
        siblingCount={1}
        shape="rounded"
        variant="text"
        sx={Style}
        onChange={onChange ? (_, p) => onChange(p) : undefined}
        renderItem={(item) => (
          <PaginationItem
            components={{
              previous: KeyboardDoubleArrowLeftIcon,
              next: KeyboardDoubleArrowRightIcon,
            }}
            sx={Style}
            {...item}
          />
        )}
      />
    </div>
  );
};

export { Pagination };
